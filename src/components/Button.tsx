import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary"; // Default variant is primary
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
        secondary: "",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
export const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
};

// import { cva } from "class-variance-authority";
// import { HTMLAttributes } from "react";

// const classes = cva("", {
//   variants: {
//     variant: {
//       primary: "bg-blue-600 text-white",
//       secondary: "bg-gray-200 text-black",
//       tertiary: "bg-transparent border border-gray-400 text-black",
//     },
//   },
//   defaultVariants: {
//     variant: "primary",
//   },
// });

// type ButtonProps = {
//   variant?: "primary" | "secondary" | "tertiary";
// } & HTMLAttributes<HTMLButtonElement>;

// export const Button = ({ variant = "primary", ...rest }: ButtonProps) => {
//   return (
//     <button className={classes({ variant })} {...rest}>
//       {rest.children}
//     </button>
//   );
// };
