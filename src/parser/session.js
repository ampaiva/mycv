function Session({ icon: Icon, text, contents }) {
    return (
        <div class="section">
        <table>
          <tr>
            <div class="title">
              <div class="column"><div class="icon">{<Icon />}</div></div>
              <div class="column"><div class="text">{text}</div></div>
              <div class="column"><div class="filler"></div></div>
            </div>
          </tr>
          <tr>
            <div class="contents">
              {contents}
            </div>
          </tr>
        </table>
      </div>
    );
}

export default Session;
