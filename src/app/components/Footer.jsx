// export default function Footer() {
//   return (
//     <footer>Copyright @2004</footer>
//   )
// }

// Another Method to write copyright and year
const year = new Date().getFullYear()
export default function Footer() {
  return (
    <footer className=" flex justify-center h-6 bg-slate-500 text-white">copyright &copy; {year}</footer>
  )
}

