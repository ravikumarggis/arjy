import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareModal = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "",
  description = "",
  hashtags = [],
  via = "",
  size = 40,
  round = true,
  onClose,
  setIsShare,
  handleFinish,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            Share this content
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close share modal"
          ></button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div
            className="grid grid-cols-3 gap-4"
            onClick={() => {
              setIsShare(true);
              handleFinish();
            }}
          >
            <FacebookShareButton
              url={url}
              quote={title}
              hashtag={hashtags.length > 0 ? `#${hashtags[0]}` : undefined}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share on Facebook"
            >
              <FacebookIcon size={size} round={round} />
              <span className="text-xs text-gray-600">Facebook</span>
            </FacebookShareButton>

            <TwitterShareButton
              url={url}
              title={title}
              via={via}
              hashtags={hashtags}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share on Twitter"
            >
              <TwitterIcon size={size} round={round} />
              <span className="text-xs text-gray-600">Twitter</span>
            </TwitterShareButton>

            <LinkedinShareButton
              url={url}
              title={title}
              summary={description}
              source={via}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <LinkedinIcon size={size} round={round} />
              <span className="text-xs text-gray-600">LinkedIn</span>
            </LinkedinShareButton>

            {/* <RedditShareButton
              url={url}
              title={title}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share on Reddit"
            >
              <RedditIcon size={size} round={round} />
              <span className="text-xs text-gray-600">Reddit</span>
            </RedditShareButton> */}

            <WhatsappShareButton
              url={url}
              title={title}
              separator=":: "
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share on WhatsApp"
            >
              <WhatsappIcon size={size} round={round} />
              <span className="text-xs text-gray-600">WhatsApp</span>
            </WhatsappShareButton>

            <EmailShareButton
              url={url}
              subject={title}
              body={description}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share via Email"
            >
              <EmailIcon size={size} round={round} />
              <span className="text-xs text-gray-600">Email</span>
            </EmailShareButton>
          </div>

          {/* Link copy section */}
          <div className="mt-6">
            <label
              htmlFor="share-url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Or copy link
            </label>
            <div className="flex">
              <input
                type="text"
                id="share-url"
                readOnly
                value={url}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none transition-colors ${
                  isCopied
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
                aria-label={isCopied ? "Link copied" : "Copy link"}
              ></button>
            </div>
            {isCopied && (
              <p className="mt-1 text-xs text-green-600">
                Link copied to clipboard!
              </p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
