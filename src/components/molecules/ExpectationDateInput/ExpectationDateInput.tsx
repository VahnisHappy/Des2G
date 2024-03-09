import BooleanButtonInput from "@/components/atoms/BooleanButtonInput";

export type ExpectationDateInputProps = {
    value: boolean | null,
    onChange?: (value: boolean | null) => void,
}
export default function ExpectationDateInput({value, onChange}: ExpectationDateInputProps) {
    const handleChange = (isService: boolean) => (v: boolean) => {
        onChange?.((isService === value && !v) ? null : isService);
    }
    return <>
        <div>expectation date</div>
        <BooleanButtonInput label="service" value={value === true} onChange={handleChange(true)}/>
        <BooleanButtonInput label="no service" value={value === false} onChange={handleChange(false)}/>
    </>;
}
