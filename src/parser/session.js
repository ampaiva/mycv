import { IsVisible } from "../components/Visible";

function Session({ icon: Icon, text, contents, items }) {

  const visibleItems = items ? items.filter((item) => IsVisible(item?.tags)).length > 0 : true;

  const sessionContents =
    <div className="section">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="title">
                <div className="column"><div className="icon">{<Icon />}</div></div>
                <div className="column"><div className="text">{text}</div></div>
                <div className="column"><div className="filler"></div></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="contents">
                {contents}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;

  return (
    visibleItems && <>{sessionContents}</>
  );
}

export default Session;
