export default function Footer() {
     const linkStyle = { border: '1px black', padding: '5px' };

     return (
          <footer>
               <section
                    style={{
                         display: 'flex',
                         fontFamily: 'helvetica',
                         flexDirection: 'row',
                         alignItems: 'flex-start',
                         justifyContent: 'flex-start',
                    }}
               >
                    <div style={linkStyle}>
                         <a href="#">GitHub</a>
                    </div>
                    <div style={linkStyle}>
                         <a href="#">LinkedIn</a>
                    </div>
               </section>
          </footer>
     );
}
