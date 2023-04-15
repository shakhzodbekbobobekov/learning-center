import {
  Button,
  Card,
  Heading,
  Rating,
  Tag,
  Text,
  TextArea,
} from "@/components";
import Input from "@/components/input/input";
import { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/layout";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useState } from "react";

const Index = ({ firstCategory, menu }: HomeProps): JSX.Element => {
  const [isClick, setIsClick] = useState(false);
  const [rating, setRating] = useState<number>(2);
  console.log(menu);
  return (
    <>
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
      <br />
      <hr />
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <hr />
      <Card color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
        expedita blanditiis repudiandae. Eaque nostrum natus repellendus
        voluptate harum quas numquam neque ex fugit distinctio omnis beatae non,
        ipsa qui.
      </Card>
      <Card color="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
        expedita blanditiis repudiandae. Eaque nostrum natus repellendus
        voluptate harum quas numquam neque ex fugit distinctio omnis beatae non,
        ipsa qui.
      </Card>
    </>
  );
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
}
