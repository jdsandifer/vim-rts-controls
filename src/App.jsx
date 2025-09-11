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
			<div className="border border-white">
				<h2>RTS Simulation Area</h2>
				<label>
					Valid command inputs will show here:
					<input
						type="text"
						name="commandInput"
						className="border border-gray500 ml-1"
					/>
					<div className="my-4 mx-auto w-80 h-56 border border-blue-500" />
				</label>
			</div>
			Copyright 2025 J.D. Sandifer. See LICENSE for more info.
		</>
	)
}

export default App
