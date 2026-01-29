import FallingText from "@/component/FallingText/FallingText";

const FallingTextComponent = () => {
  return (
    <div className="h-[600px] container mx-auto">
      <FallingText
        text={`Stable Trusted Assured Bitcoin Unshaken Secure Instant Effortless Deposit USDT Reliable Smooth  Withdraw Transfer Instant Swift Blink Etherium`}
        highlightWords={[
          "Smooth",
          "Deposit",
          "Effortless",
          "Withdraw",
          "Bitcoin",
          "Etherium",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default FallingTextComponent;
