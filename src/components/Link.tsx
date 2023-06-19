import { FC } from "react";

interface LinkProps {
  link: {
    description: string;
    url: string;
  };
}

const Link: FC<LinkProps> = ({ link }) => {
  // const { link } = props;
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
