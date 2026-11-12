import LayoutBox from "./LayoutBox"







function EventPropagation() {
  const returnHandlePrint = (color: string) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log(color, e.target);
    };
  };
  return (
    <details>
      <summary>
        <b>이벤트 전파 & 기본 작동 방지</b>
      </summary>
      {/* <div className="box" role="button" onClick={handleClick}></div> */}
      <LayoutBox style={styles.cyan} onClick={returnHandlePrint("cyan")}>
        <LayoutBox
          style={styles.magenta}
          onClick={returnHandlePrint("magenta")}
        >
           <LayoutBox
            style={styles.yellow}
            onClick={returnHandlePrint("yellow")}
          ></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  )
}

const styles = {
  cyan: {
    "--color": "var(--cyan)",
  },
  magenta: {
    "--color": "var(--magenta)",
  },
  yellow: {
    "--color": "var(--yellow)",
  },
  purple: {
    "--color": "var(--purple, #7423f6)",
  },
};


export default EventPropagation