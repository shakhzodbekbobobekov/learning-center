import { Button, Heading, Tag, Text } from "@/components";

const Index = () => {
  return (
    <div>
      <Heading tag="h3">Children</Heading>
      <Text size="s" >Text</Text>
      <Tag size="s" color="red" >  red</Tag>
      <Tag size="m" color="green" > green </Tag>
      <Button appearance="primary" > Primary</Button>
      <Button appearance="ghost" >Ghost</Button>
      <Button appearance="ghost" arrow="right" >Arrow</Button>
    </div>
  );
};

export default Index;
