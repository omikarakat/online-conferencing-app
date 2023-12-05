import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/room/${value}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: `url('conf.jpg') no-repeat center center fixed`,
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '0px',
        borderRadius: '25px',
        boxShadow: 'black',
        color: '#fff',
        fontFamily: "'Aoboshi One', sans-serif", // Добавленный шрифт из Google Fonts
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          top: '20px',
        }}
      >
        {/* Логотип и название */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <h2 style={{ margin: '0', color: '#fff' }}>Video Call App</h2>
        </div>
        {/* Пункты меню */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>
            About us
          </a>
          <a href="#product" style={{ color: '#fff', textDecoration: 'none' }}>
            Product
          </a>
          <a href="#blogs" style={{ color: '#fff', textDecoration: 'none' }}>
            Blogs
          </a>
        </div>
      </div>

      {/* Основное содержимое страницы */}
      <div>
        <h1
          style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            marginTop: '-100px',
            marginBottom: '10px',
          }}
        >
          Online Conferencing App
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '20px',
          }}
        >
          by Omirtay Karakat
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              padding: '10px',
              margin: '5px',
              border: 'none',
              borderRadius: '17px',
              fontSize: '1rem',
              outline: 'none',
            }}
            placeholder="Enter Room Code"
          />
          <button
            onClick={onClick}
            style={{
              padding: '12px',
              margin: '8px',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '17px',
              border: 'none',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#0056b3')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = '#007bff')
            }
          >
            Join conference
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
