
interface Props {
  /**
  * @description The description of title.
  */
  title?: string;
  /**
  * @description The description of description.
  */
  paragraphs?: string[];
}

export default function Section({ title = "Big Title", paragraphs }: Props) {
  return (
    <div class="flex flex-col py-[60px] pl-[150px] pr-[100px] gap-10">
      <h1 class="text-4xl font-bold">{title}</h1>
      <div class="flex flex-col gap-5">
        {
          paragraphs?.map((paragraph) => 
            <p class="text-lg">{paragraph}</p>
          )
        }
      </div>
    </div>
  )
}