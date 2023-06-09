// AccountButton.tsx

type InputProps = {
    text: string,
    background_color: string,
    text_color: string
}

export default function AccountButton({ text, background_color, text_color }: InputProps) {
    return (
        <div className="w-full flex items-center justify-center">
            <button className={` bg-[${background_color}] w-full border border-[#007AD3] rounded-[5px] py-[14px] font-bold text-base text-[1.125rem] text-[${text_color}] leadding-[1.375rem]`} type="submit">
                {text}
            </button>
        </div>
    )
}