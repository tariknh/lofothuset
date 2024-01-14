import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormSelectProps = {
  values: string[];

  id: string;
  formData: any;
  handleInputChange: any;
  name: string;
};

{
  /* <input
  type="text"
  placeholder="Oppgave"
  name="task"
  value={formData.task}
  onChange={handleInputChange}
  required
/>; */
}

function FormSelect({
  values,
  id,
  formData,
  handleInputChange,
  name,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <Select value={formData} onValueChange={handleInputChange}>
        <SelectTrigger
          name={name}
          id={id}
          className="w-full border-[1px] border-[#676767] p-4 rounded-lg focus:outline-none outline-none mt-2 text-base focus:ring-0 focus:shadow-none"
        >
          <SelectValue placeholder={formData} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value, index) => (
            <SelectItem
              className="focus:bg-lagText focus:text-white "
              key={index}
              value={value}
            >
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
