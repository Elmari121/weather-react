import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};
Primary.args = {
  label: "Click Me!",
};
export const Default = () => <Button label="Search" onClick={() => {}} />;
