import WZName from "../components/WZName";
import AddButton from "../components/AddButton";
import Display from "../wrapers/Display";
import { wznames } from "../Database";

function AllWzNames(props) {
  props.setPath("Warzonenamen");
  props.setBackto("/");

  function getData() {
    return wznames;
  }

  function createWZNames() {
    return getData().map((value) => (
      <WZName
        key={value.key}
        clantag={value.clantag}
        gamertag={value.gamertag}
        created={value.created}
      />
    ));
  }

  return (
    <Display>
      {createWZNames()}
      <AddButton forwardTo="/addwzname" />
    </Display>
  );
}

export default AllWzNames;
