import { useEffect, useLayoutEffect, useRef, useState } from "react"

/*
렌더링 시작
↓
DOM 업데이트
↓
useLayoutEffect 실행  <== 여기서 측정/설정
↓
화면 그리기
↓
useEffect 실행
 */

function Parent() {

  const boxRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  console.log('normal');

  useLayoutEffect(()=>{
    console.log('useLayoutEffect');
    if (boxRef.current) {
      boxRef.current.scrollTop = 100;
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect');

  })

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          height: "150px",
          overflow: "auto",
          border: "1px solid gray",
        }}
      >
        이 박스의 높이: {height}px

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quis, molestiae impedit tempora unde sapiente quas, et magni sed laborum alias aperiam. Ducimus voluptatum eius sed praesentium consequuntur quam quis libero tempore vitae, facere aperiam dolor fugiat. Fuga debitis quis nisi nemo harum pariatur aspernatur nesciunt sapiente vitae, rerum a voluptas soluta iste similique laudantium fugit ipsum, quo magni repellendus, tenetur corrupti corporis necessitatibus reiciendis? Nemo praesentium odio provident libero ab tempore excepturi dignissimos sequi a inventore sed nisi odit aliquid voluptatum non dolore, consequatur impedit commodi animi. Quis est id delectus rerum, porro debitis labore quaerat odit fugit aliquid itaque nesciunt placeat quasi ratione ut numquam totam molestias sapiente sint laboriosam nobis iure. Eaque cumque, corporis iure cupiditate praesentium sint pariatur voluptas ipsum. Impedit, amet harum fugiat aliquid repudiandae accusamus accusantium quaerat nihil dolor, officiis, a velit veritatis? Maxime fuga ducimus debitis saepe rerum facere, voluptatibus omnis? Earum velit, aliquam ut repellendus accusamus ea laboriosam. Delectus, corporis nemo dolor consequuntur autem, maiores ipsum suscipit atque nihil laboriosam cum eum officiis cupiditate, provident nisi sint quo impedit animi. Recusandae porro consequatur facilis similique maiores ipsum veritatis facere est consequuntur dolore debitis, repellendus quasi distinctio possimus tenetur a minus, accusamus eligendi natus perspiciatis fugit quidem. Debitis hic iure sapiente consectetur repellendus enim velit commodi corporis ipsa. Debitis deleniti voluptatum, magnam fuga dolores molestiae dolore quo ipsa molestias exercitationem commodi in doloribus autem a! A nam eum officiis blanditiis provident libero sunt excepturi tempora iusto repellat, quis atque. Doloribus non velit officiis autem nostrum magnam esse odit, sit ab deleniti, harum nulla necessitatibus. Adipisci voluptas illo rerum dolorem eius natus eos quidem impedit cumque doloremque voluptatem minima qui, soluta sequi cum, praesentium eligendi nulla nobis optio magni nisi mollitia suscipit. Recusandae nisi blanditiis modi? Sequi adipisci aperiam, fugit magnam repellendus quae quidem.
      </div>
    </div>
  );
}
export default Parent