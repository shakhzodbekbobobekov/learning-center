import { Button, Heading, Tag, Text, TextArea } from "@/components";
import Input from "@/components/input/input";
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
      <Input placeholder="enter bro " />
      <TextArea placeholder="message" />
    </div>
  );
};

export default Index;

