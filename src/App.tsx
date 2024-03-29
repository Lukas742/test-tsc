import { ReactNode, ReactPortal, ReactFragment, ReactChild } from "react";
import { MessageStrip, Icon } from "@ui5/webcomponents-react";

type ReducedReactNode = Exclude<
  ReactNode,
  string | number | boolean | ReactPortal | ReactFragment
>;

export type UI5WCSlotsNode =
  | ReducedReactNode
  | Iterable<ReducedReactNode>
  | false;

interface PropTypes {
  someSlot: UI5WCSlotsNode;
}

const TestComp = (props: PropTypes) => {
  return null;
};

export default function App() {
  return (
    <>
      <TestComp someSlot={<Icon name="employee" />} />
    </>
  );
}
