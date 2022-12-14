import { EnterIcon } from "@radix-ui/react-icons";
import { Fragment } from "react";
import { Paragraph } from "../../components/typography/paragraph";
import type { ReactElement } from "react";
import { SmallButton } from "../../components/button/base";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const ConnectButton = (): ReactElement => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/auth/connect`);
  };

  return (
    <Fragment>
      {status === "loading" ? (
        <Paragraph>Loading...</Paragraph>
      ) : status === "unauthenticated" ? (
        <SmallButton onClick={handleClick}>
          <p>Connect</p>
          <EnterIcon />
        </SmallButton>
      ) : (
        <SmallButton>Avatar</SmallButton>
      )}
    </Fragment>
  );
};
