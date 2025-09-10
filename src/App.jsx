import viteLogo from '/vite.svg'
import './App.css'

function App() {
	return (
		<>
			<div className="flex justify-center">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</div>
			<h1>Vim-like RTS Controls Demo</h1>
			<p>
				Demonstrating controls for a real-time strategy game with keyboard
				commands based on Vim motions.
			</p>
			<div className="card">
				<button onClick={() => {}}>Start the demo</button>
			</div>
			Copyright 2025 J.D. Sandifer. See LICENSE for more info.
		</>
	)
}

export default App
