import { React, useState } from "react";

// const Latihan2 = () => {
//   const [add, setAdd] = useState(1);
//   const [post, setPost] = useState([

//   ])

//   const datas = {
//     id: 1,
//     notes: ""
//   }
  
// //   const LoopNote = () => {
// //     let items = [];

// //     for (let index = 1; index <= add; index++) {
// //       items.push(
// //         <div className="col-4">
// //           <NoteItem />
// //         </div>
// //       );
// //     }
// //     return items;
// //   };

//   const NoteItem = () => {
//     return (
//       <div className="card">
//         <div className="card-header">
//           {/* <span onClick={() => setAdd(add+1)}>+</span>
//           <span onClick={() => setAdd(add-1)}>x</span> */}
//           <span onClick={() => setPost([...post, datas])}>+</span>
//           <span onClick={() => setPost(prev)}>x</span>
//         </div>
//         <div className="card-body">
//           <textarea name="notes" id=""></textarea>
//         </div>
//       </div>
//     );
//   };
  
//   return (
//     <div className="card">
//       <div className="card-header">Sticky Notes</div>
//       <div className="card-body">
//         <div className="row">
//           {/* <LoopNote /> */}
//           {post.map((v, index) => (
//             <div key={index} className="col=4">
//                 <NoteItem />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Latihan2;


export default function Latihan2() {
  const [add, setAdd] = useState(1);

  const NoteItem = () => {
    return (
      <div className="card bg-warning">
        <div className="card-header p-0">
          <span
            onClick={(e) => {
              setAdd(add + 1);
            }}
          >
            +
          </span>
          <span
            onClick={(e) => {
              setAdd(add - 1);
            }}
          >
            x
          </span>
        </div>
        <div className="card-body">
          <textarea></textarea>
        </div>
      </div>
    );
  };

  const LoopNote = () => {
    let items = [];

    for (let index = 0; index <= add; index++) {
      items.push(
        <div className="col-4">
          <NoteItem />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="card">
      <div className="card-header">Sticky Notes</div>
      <div className="card-body">
        <div className="row">
          <LoopNote />
        </div>
      </div>
    </div>
  );
}
