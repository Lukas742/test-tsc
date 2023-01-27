import { MessageStrip, Icon } from "@ui5/webcomponents-react";

export default function App() {
  return (
    <>
      <MessageStrip icon={<Icon name="employee" />}>Text</MessageStrip>
    </>
  );
}
