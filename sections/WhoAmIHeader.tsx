import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
}: Props) {
  return (
    <div
      class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4
          flex flex-col items-center justify-center lg:max-w-3xl py-10
      }`}
    >
      <div
        class="inline-block lg:text-[50px] text-4xl leading-none font-medium"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      >
      </div>
    </div>
  );
}
