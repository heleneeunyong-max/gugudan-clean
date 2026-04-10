export default function Home() {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>구구단 게임</h1>
      <p>연습할 단을 선택하세요</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 120px)",
          gap: "12px",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        {numbers.map((num) => (
          <button
            key={num}
            style={{
              padding: "20px",
              fontSize: "24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#4f46e5",
              color: "white"
            }}
          >
            {num}단
          </button>
        ))}
      </div>
    </main>
  )
}
