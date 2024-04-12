function Session({ icon: Icon, text, contents }) {
  return (
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
    </div>
  );
}

export default Session;
