import "./App.css";
import React from "react";

// create timeer

class App extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      return this.setState({ now: new Date() });
    }, 1000);
  }

  render() {
    const { now } = this.state;
    const jam = now.getHours();
    const rope = now.getMinutes();
    const varkyan = now.getSeconds();
    return (
      <>
        <div className="jam">
          {jam}:{rope}:{varkyan}
        </div>
      </>
    );
  }
}

// plyus minus

// class App extends React.Component {
//   constructor(...props) {
//     super(...props);

//     this.state = {
//       caunt: 0,
//     };
//     this.plyus = this.plyus.bind(this);
//     this.minus = this.minus.bind(this);
//   }
//   plyus() {
//     return this.setState({ caunt: this.state.caunt - 1 });
//   }
//   minus() {
//     return this.setState({ caunt: this.state.caunt + 1 });
//   }

//   render() {
//     const { caunt } = this.state;
//     return (
//       <>
//         <button onClick={this.minus}>+</button>
//         <h1>{caunt}</h1>
//         <button onClick={this.plyus}>-</button>
//       </>
//     );
//   }
// }

// Acardion

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.sections = [
//       {
//         title: "Erevan",
//         text: `Armenia
//                   `,
//       },
//       {
//         title: "Erevan",
//         text: `Aremenia
//                   `,
//       },
//     ];
//   }
//   render() {
//     return (
//       <>
//         {this.sections.map((el, i) => (
//           <Items key={`el.title_${i}`} title={el.title} context={el.text} />
//         ))}
//       </>
//     );
//   }
// }
// class Items extends React.Component {
//   constructor(...props) {
//     super(...props);
//     this.state = {
//       bac: false,
//     };
//     this.bacClick = this.bacClick.bind(this);
//   }
//   bacClick() {
//     this.setState({ bac: !this.state.bac });
//   }
//   render() {
//     const { bac } = this.state;

//     return (
//       <div className="items">
//         <div className="title" onClick={this.bacClick}>
//           <div>{this.props.title}</div>
//         </div>
//         {bac && <div className="content">{this.props.context}</div>}
//       </div>
//     );
//   }
// }

export default App;
