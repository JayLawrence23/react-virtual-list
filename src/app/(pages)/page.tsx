import { RQueryWrapper } from "@/hooks";
import Main from "@/home/Main";

export default function Home() {
  return (
    <main>
      <RQueryWrapper>
        <Main />
      </RQueryWrapper>
    </main>
  );
}
