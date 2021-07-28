import Quote from "../components/Quote";
import Display from "../wrapers/Display";
import { quotes } from "../Database";

function AllQuotes(props) {
  props.setPath("Zitate");
  props.setBackto("/");

  function getData() {
    return quotes;
  }

  function createQuotes() {
    return getData().map((value) => (
      <Quote
        key={value.id}
        statements={value.statements}
        created={value.created}
      />
    ));
  }

  return <Display>{createQuotes()}</Display>;
}

export default AllQuotes;
