import StyledButton from "@/component/Button/StyledButton";
import CopyButton from "@/component/CopyButton/copyButton";
import DynamicDropdown from "@/component/DropDown/dropDown";
import StyledInput from "@/component/Input/inputField";
import ScreenLoader from "@/component/Loader/screenLoader";
import ScratchCardComponent from "@/component/ScratchCard/scratch";
import ShareButtons from "@/component/Share/share";
import api, { stateCityUrl } from "@/service/api";
import { IconBrandTelegram } from "@tabler/icons-react";
import axios from "axios";
import { Formik } from "formik";
import {
  Check,
  CheckCheck,
  CopyIcon,
  Facebook,
  Instagram,
  Share2,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const stepData = [
  {
    title: "Enter Your Details",
    subtitle: "Start your referral process",
    step: 1,
  },
  {
    title: "Complete Social Engagements",
    subtitle: "Follow and connect online",
    step: 2,
  },
  {
    title: "Get Your Referral Code",
    subtitle: "Receive your unique link",
    step: 3,
  },
];

const userDetailsSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  mobile: Yup.number()
    .typeError("Mobile must be a number")
    .required("Mobile is required")
    .test(
      "len",
      "Mobile number must be 10 digits",
      (val) => val && /^\d{10}$/.test(val.toString())
    ),
});

const Stepper = () => {
  // const socialImg = [
  //   {
  //     name: "Twitter",
  //     bgImg: "/assets/socialIcons/twitter.png",
  //     btnText: "Followed",
  //     icon: <X size={22} />,
  //     url: "https://x.com/noworyapp",
  //     isFollowed: false,
  //   },
  //   {
  //     name: "Telegram Channel",
  //     bgImg: "/assets/socialIcons/telegram.png",
  //     btnText: "Join",
  //     icon: <IconBrandTelegram size={22} />,
  //     url: "https://t.me/noworyapp",
  //     isFollowed: true,
  //   },
  //   {
  //     name: "Instagram",
  //     bgImg: "/assets/socialIcons/instagram.png",
  //     btnText: "Follow",
  //     icon: <Instagram size={18} />,
  //     url: "https://www.instagram.com/noworyapp/",
  //     isFollowed: false,
  //   },
  //   {
  //     name: "Facebook",
  //     bgImg: "/assets/socialIcons/facebook.png",
  //     btnText: "Follow",
  //     icon: <Facebook size={20} />,
  //     url: "https://www.facebook.com/share/16n61EAcx8/",
  //     isFollowed: true,
  //   },
  // ];
  const [socialItems, setSocialItems] = useState([
    {
      name: "Twitter",
      bgImg: "/assets/socialIcons/twitter.png",
      btnText: "Follow",
      icon: <X size={22} />,
      url: "https://x.com/noworyapp",
      isFollowed: false,
    },
    {
      name: "Telegram Channel",
      bgImg: "/assets/socialIcons/telegram.png",
      btnText: "Join",
      icon: <IconBrandTelegram size={22} />,
      url: "https://t.me/noworyapp",
      isFollowed: false,
    },
    {
      name: "Instagram",
      bgImg: "/assets/socialIcons/instagram.png",
      btnText: "Follow",
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/noworyapp/",
      isFollowed: false,
    },
    {
      name: "Facebook",
      bgImg: "/assets/socialIcons/facebook.png",
      btnText: "Follow",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/share/16n61EAcx8/",
      isFollowed: false,
    },
  ]);

  const [isShareModal, setIsShareModal] = useState(false);
  function checkFollwed(data) {
    return data.isFollowed ? true : false;
  }

  const checkFollowed = useMemo(() => {
    return socialItems?.every(checkFollwed);
  }, [socialItems]);

  const [activeStep, setActiveStep] = useState(1);
  // const totalSteps = 3;
  const [totalSteps, settotalSteps] = useState(3);
  const [userData, setUserData] = useState();
  const [copying, setCopying] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [stateName, setStateName] = useState([]);
  const [allStateCityData, setAllStateCityData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [finalStepData, setFinalStepData] = useState();
  const [loader, setLoader] = useState(false);

  const filterCities = useMemo(() => {
    return allStateCityData?.states?.find((item) => item.name === selectedState)
      ?.cities;
  }, [allStateCityData, selectedState, stateName]);

  useEffect(() => {
    setSocialItems((prevItems) => {
      return prevItems.map((item) => {
        const apiItem = userData?.user?.socialData?.find(
          (api) => api.name === item.name
        );
        return apiItem ? { ...item, isFollowed: apiItem.isFollowed } : item;
      });
    });
  }, [userData]);

  const handleCopy = async (text) => {
    try {
      setCopying(true);
      await navigator.clipboard.writeText(text);
      toast.success("Copied successfully!");
    } catch (err) {
      toast.error("Failed to copy text");
      console.error("Failed to copy text: ", err);
    } finally {
      setTimeout(() => {
        setCopying(false);
      }, 2000);
    }
  };

  const result = useMemo(() => {
    return socialItems.map(({ name, isFollowed }) => ({
      name,
      isFollowed,
    }));
  }, [socialItems]);

  const handleSoialMedia = async (isNavigate = false) => {
    try {
      const response = await api({
        url: "/api/user/socialmedia",
        method: "POST",
        data: {
          userId: userData?.user?.id,
          socialData: result,
          step: !isNavigate ? 2 : activeStep + 1,
        },
      });
      // toast.success(response?.message);
      if (isNavigate) {
        handleNext();
      }
    } catch (error) {
      console.log(error, "error");
      // toast.error(error?.response?.data?.message);
    }
  };

  const handleFollowSoial = (name, followed) => {
    setSocialItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, isFollowed: followed } : item
      )
    );
  };

  useEffect(() => {
    if (socialItems && activeStep == 2) {
      handleSoialMedia();
    }
  }, [socialItems, activeStep]);

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const complete = () => {
    sessionStorage.setItem("userId", null);
    // handleFinish();
  };

  const handleFinish = () => {
    setActiveStep(totalSteps + 1);
  };

  const handleGetUserDetails = async (id, email) => {
    setLoader(true);
    try {
      const response = await api({
        url: "/api/user/getuser",
        method: "POST",
        data: {
          userId: id,
          email: email,
        },
      });

      setUserData(response);
      setActiveStep(response?.user?.step);
      setLoader(false);
      sessionStorage.setItem("userId", response?.user?.id);
      // handleNext();
    } catch (error) {
      setLoader(false);
      sessionStorage.setItem("userId", "no data");
      console.log(error?.response?.data?.message, "error");
    }
  };

  const handleGetCity = async (id) => {
    try {
      const response = await axios.get(stateCityUrl);
      const data = response?.data?.result?.find(
        (item) => item.name === "India"
      );
      const stateNamesData = data?.states.map((state) => state.name).reverse();
      setAllStateCityData(data);
      setStateName(stateNamesData);
    } catch (error) {
      sessionStorage.setItem("userId", "no data");
      console.log(error?.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    handleGetUserDetails(id);
    handleGetCity();
  }, []);

  const handleFormSubmit = async (data) => {
    const { email, mobile, referral } = data;
    try {
      const response = await api({
        url: "/api/user/addUser",
        method: "POST",
        data: {
          email,
          mobile,
          state: selectedState,
          city: selectedCity,
          step: activeStep + 1,
          parentrefferalCode: referral,
        },
      });
      toast.success(response?.message);
      setUserData(response);
      sessionStorage.setItem("userId", response?.user?.id);
      handleNext();
    } catch (error) {
      console.log(error?.response?.data?.message, "error");
      toast.error(error?.response?.data?.message);
    }
  };

  const handleFinalStep = async () => {
    try {
      const response = await api({
        url: "/api/user/finalstep",
        method: "POST",
        data: {
          userId: userData?.user?.id,
          step: activeStep + 1,
        },
      });

      setFinalStepData(response?.user);
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (activeStep === 3) {
      handleFinalStep();
    }
  }, [activeStep]);

  return (
    <Formik
      initialValues={{
        email: "",
        mobile: "",
        state: "",
        city: "",
        referral: "",
      }}
      validationSchema={userDetailsSchema}
      onSubmit={(values) => {
        handleFormSubmit(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <div className="w-full px-5 lg:max-w-7xl pt-10">
          <div className="w-full">
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-[#512DA8] h-2 rounded-full"
                style={{
                  width:
                    activeStep === 1
                      ? "1.5%"
                      : activeStep === 2
                      ? "50%"
                      : activeStep === 3
                      ? "100%"
                      : "",
                }}
              ></div>
            </div>
            <div className="flex gap-5 flex-col md:flex-row justify-between pt-4">
              {stepData?.map((item, i) => {
                return (
                  <div
                    key={i + 1}
                    className={`border  
                  ${
                    activeStep === item.step
                      ? "border-[#512DA8]"
                      : "border-[#CFD6DC]"
                  }  rounded-[8px] px-4 py-1.5 space-y-0.5`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`
                        ${
                          activeStep > item.step
                            ? "bg-[#512DA8] border border-transparent"
                            : ""
                        }
                      flex justify-center items-center border-2 ${
                        activeStep === item.step
                          ? "border-[#512DA8] text-[#512DA8]"
                          : "border-black text-black"
                      }  rounded-full border-[1.5px] w-[22px] h-[22px] `}
                      >
                        {activeStep > item.step ? (
                          <Check color="white" size={12} />
                        ) : (
                          <p className="text-sm">{item.step}</p>
                        )}
                      </div>
                      <p
                        className={`
                     
                      ${
                        activeStep === item.step
                          ? "text-[#512DA8]"
                          : "text-[#273746]"
                      }  font-semibold`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <p>{item.subtitle}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 sm:mt-3">
              <div style={{ display: activeStep === 1 ? "block" : "none" }}>
                <div className="px-6 md:px-10 pt-10 lg:pt-0  lg:px-20 min-h-auto lg:h-[542px] gap-10 xl:gap-0  flex flex-col lg:flex-row justify-between items-center border border-dashed border-gray-200 rounded-[50px] bg-[#f5ecdf]  dark:border-neutral-700">
                  <div className="flex flex-col justify-start items-start gap-3 w-full">
                    <div className="flex flex-col gap-1 w-full xl:pr-90">
                      <label>Email Address</label>

                      <DynamicDropdown
                        value={values.email}
                        setValue={handleChange("email")}
                        options={["Option 1", "Option 2", "Option 3"]}
                        placeholder="Enter your email address"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-[12px]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1  w-full  xl:pr-90">
                      <label>Mobile Number</label>

                      <DynamicDropdown
                        value={values.mobile}
                        setValue={handleChange("mobile")}
                        placeholder="Enter your 10-digit mobile number"
                      />
                      {touched.mobile && errors.mobile && (
                        <p className="text-red-500 text-[12px]">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1  w-full xl:pr-90">
                      <label>State</label>

                      <DynamicDropdown
                        value={selectedState}
                        setValue={setSelectedState}
                        // setValue={handleChange("state")}
                        options={stateName || []}
                        isDropdown={true}
                        placeholder="Select your state"
                      />
                      {touched.state && errors.state && (
                        <p className="text-red-500 text-[12px]">
                          {errors.state}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 w-full xl:pr-90">
                      <label>City</label>
                      <DynamicDropdown
                        value={selectedCity}
                        setValue={setSelectedCity}
                        options={filterCities || []}
                        isDropdown={true}
                        placeholder="Select your city"
                      />
                      {touched.city && errors.city && (
                        <p className="text-red-500 text-[12px]">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1 w-full xl:pr-90">
                      <label>Referral</label>
                      <DynamicDropdown
                        value={values.referral}
                        setValue={handleChange("referral")}
                        options={filterCities || []}
                        isDropdown={false}
                        placeholder="Enter referral"
                      />
                      {touched.city && errors.city && (
                        <p className="text-red-500 text-[12px]">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 w-full xl:pr-90">
                      <StyledButton
                        disabled={
                          Object.keys(errors).length > 0 ||
                          !selectedState ||
                          !selectedCity
                        }
                        onClick={() => handleSubmit()}
                      >
                        Submit
                      </StyledButton>
                    </div>
                  </div>

                  <img src="/assets/step1.svg" width={400} />
                </div>
              </div>

              <div style={{ display: activeStep === 2 ? "block" : "none" }}>
                <div className="px-6 md:px-10 pt-10 lg:pt-0  lg:px-20 min-h-auto 2xl:h-[542px]   gap-10 xl:gap-0  flex flex-col lg:flex-row justify-between items-center border border-dashed border-gray-200 rounded-[50px] bg-[#f5ecdf]  dark:border-neutral-700">
                  <div className="flex flex-col justify-center items-center w-full gap-15 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 place-content-center">
                      {socialItems?.map((item, i) => {
                        return (
                          <div
                            key={i + 1}
                            className="relative  w-full min-w-[250px]"
                          >
                            <Image
                              src={item.bgImg}
                              alt={item.name}
                              width={250}
                              height={250}
                              // className="w-full h-auto"
                            />
                            <div className="absolute inset-0  top-20 flex flex-col items-center justify-center gap-10 px-10">
                              <p className="text-black text-[20px] font-medium">
                                {item.name}
                              </p>

                              <button
                                onClick={() => {
                                  handleFollowSoial(item.name, true);
                                  handleSocialClick(item.url);
                                }}
                                type="button"
                                className={`cursor-pointer rounded-[15px] max-w-[168px]  font-medium  text-sm px-13 py-4 ${
                                  item?.isFollowed
                                    ? "bg-[#512DA8] text-white"
                                    : "border border-[#512DA8] text-[#512DA8]"
                                } `}
                              >
                                <div className="flex flex-row gap-1.5 items-center justify-center text-[16px]">
                                  <p>
                                    {item?.isFollowed &&
                                    item.name === "Telegram Channel"
                                      ? "Joined"
                                      : item?.isFollowed
                                      ? "Followed"
                                      : item.btnText}
                                  </p>
                                  <p>{item.icon}</p>
                                </div>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-full md:w-[30%]">
                      <StyledButton
                        disabled={!checkFollowed}
                        onClick={() => handleSoialMedia(true)}
                      >
                        Next
                      </StyledButton>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display:
                    activeStep === 3 || activeStep === 4 ? "block" : "none",
                }}
              >
                <div className="px-6 md:px-10 pt-10 lg:pt-0  lg:px-20 min-h-auto lg:h-[542px] gap-10 xl:gap-0  flex flex-col lg:flex-row justify-between items-center border border-dashed border-gray-200 rounded-[50px] bg-[#f5ecdf]  dark:border-neutral-700">
                  <div className=" flex flex-col lg:flex-row justify-between items-center w-full md:px-8 py-8 gap-8">
                    <div className="max-w-[450px] flex gap-20 flex-col justify-start items-start ">
                      <div>
                        <p className="text-black text-2xl font-medium mb-4 text-left">
                          Get Your Referral Code
                        </p>
                        <p className="text-[16px] text-left lg:text-left">
                          Congratulations! You've completed all the required
                          steps. Your unique referral code is ready. Share it
                          with at least 3 friends and help them join Nowory.
                          Once 3 friends sign up using your code, you'll receive
                          a digital scratch card with Bitcoin rewards.
                        </p>
                      </div>

                      <div className="w-full flex flex-row justify-start items-center gap-2">
                        <div className="w-full lg:w-[70%]">
                          <ReferenceCodeDisplay
                            referralCode={
                              userData?.user?.referralCode ||
                              finalStepData?.referralCode
                            }
                            handleCopy={handleCopy}
                            copying={copying}
                          />
                        </div>

                        <div className="cursor-pointer bg-white text-black p-2.5 rounded-full">
                          <Share2
                            color="#512DA8"
                            onClick={() => {
                              setIsShareModal(true);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {isShare && (
                      <ScratchCardComponent
                        userData={userData?.user}
                        copying={copying}
                        complete={complete}
                        handleCopy={handleCopy}
                        referralCode={userData?.user}
                      />
                    )}

                    {isShareModal && (
                      <ShareButtons
                        setIsShare={setIsShare}
                        handleFinish={handleFinish}
                        onClose={() => setIsShareModal(false)}
                      />
                    )}

                    {!isShare && (
                      <Image
                        width={215}
                        height={100}
                        alt="hello"
                        src={"/assets/scratchCard.png"}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* <div style={{ display: activeStep === 4 ? "block" : "none" }}>
                <div className="px-6 md:px-10 pt-10 lg:pt-0  lg:px-20 min-h-auto lg:h-[542px] gap-10 xl:gap-0  flex flex-col lg:flex-row justify-between items-center border border-dashed border-gray-200 rounded-[50px] bg-[#f5ecdf]  dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Final content
                  </h3>
                </div>
              </div> */}

              {/* <div className="mt-5 flex justify-between items-center gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={handleBack}
                  disabled={activeStep === 1}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>

                {activeStep < totalSteps ? (
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#512da8] text-white hover:bg-[#512da8] focus:outline-hidden focus:bg-[#512da8] disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleNext}
                  >
                    Next
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                ) : activeStep === totalSteps ? (
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#512da8] text-white hover:bg-[#512da8] focus:outline-hidden focus:bg-[#512da8] disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleFinish}
                  >
                    Finish
                  </button>
                ) : (
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#512da8] text-white hover:bg-[#512da8] focus:outline-hidden focus:bg-[#512da8] disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                )}
              </div> */}
            </div>
          </div>
          {loader && <ScreenLoader />}
        </div>
      )}
    </Formik>
  );
};

export default Stepper;

const ReferenceCodeDisplay = ({ handleCopy, copying, referralCode }) => {
  const referenceCode = "ref_18fd2f13dcc";
  return (
    <div className="w-full mx-auto px-2 py-1 bg-white border  border-dashed border-[#512DA8] rounded-[100px] shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#512DA8] text-sm pl-3">
          {referralCode}
        </span>
        {copying ? (
          <button
            onClick={() => handleCopy(referralCode)}
            className="cursor-pointer ml-2 px-4 py-2 bg-[#512DA8] text-white text-[16px] rounded-[23px] transition-colors"
          >
            Copy
          </button>
        ) : (
          <button
            onClick={() => handleCopy(referralCode)}
            className="cursor-pointer ml-2 px-4 py-2 bg-[#512DA8] text-white text-[16px] rounded-[23px] transition-colors"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};
