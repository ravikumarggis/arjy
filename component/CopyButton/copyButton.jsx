import { CopyCheck, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const CopyButton = ({ textToCopy }) => {
  const [copying, setCopying] = useState(false);

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

  return (
    <>
      {!copying ? (
        <CopyIcon
          onClick={() => handleCopy("NWRY005")}
          size={18}
          className="text-[#0CC72E] "
        />
      ) : (
        <CopyCheck
          onClick={() => handleCopy("NWRY005")}
          size={18}
          className="text-[#0CC72E]"
        />
      )}
    </>
  );
};

export default CopyButton;
