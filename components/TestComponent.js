export default function TestComponent({ name = 'world' }) {
  return (
    <>
      <div className="text-blue-600">Hello, {name}!</div>
    </>
  )
}
