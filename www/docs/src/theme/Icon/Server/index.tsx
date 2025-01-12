import React from "react"
import { IconProps } from ".."

const IconServer: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.125 14.375V14.185C18.1249 13.896 18.0913 13.608 18.025 13.3267L16.135 5.29333C15.9898 4.6763 15.6404 4.1264 15.1436 3.73282C14.6467 3.33924 14.0314 3.12505 13.3975 3.125H6.6025C5.96862 3.12505 5.35334 3.33924 4.85644 3.73282C4.35955 4.1264 4.01018 4.6763 3.865 5.29333L1.975 13.3267C1.9087 13.608 1.87515 13.896 1.875 14.185V14.375M18.125 14.375C18.125 15.038 17.8616 15.6739 17.3928 16.1428C16.9239 16.6116 16.288 16.875 15.625 16.875H4.375C3.71196 16.875 3.07607 16.6116 2.60723 16.1428C2.13839 15.6739 1.875 15.038 1.875 14.375M18.125 14.375C18.125 13.712 17.8616 13.0761 17.3928 12.6072C16.9239 12.1384 16.288 11.875 15.625 11.875H4.375C3.71196 11.875 3.07607 12.1384 2.60723 12.6072C2.13839 13.0761 1.875 13.712 1.875 14.375M15.625 14.375H15.6317V14.3817H15.625V14.375ZM13.125 14.375H13.1317V14.3817H13.125V14.375Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconServer
