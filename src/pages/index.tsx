import { Button, Heading, Tag, Text } from "@/components";
import { useState } from "react";

const Index = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <Heading tag="h3">Children</Heading>
      <Text size="s">Text</Text>
      <Tag size="s" color="red">
        {" "}
        red
      </Tag>
      <Tag size="m" color="green">
        {" "}
        green{" "}
      </Tag>
      <Button appearance="primary"> Primary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button
        appearance="ghost"
        arrow={isClick ? "down" : "right"}
        onClick={() => setIsClick((prev) => !prev)}
      >
        Arrow
      </Button>
    </div>
  );
};

export default Index;
