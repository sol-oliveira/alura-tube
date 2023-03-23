import { Logo } from "../Logo/Logo";
import { StyledHeader } from "./StyledHeader";
import Search from "../Search/Search";


export default function Header({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
    </StyledHeader>
  );
}
