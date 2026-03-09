export function Footer() {
  return (
    <footer className="px-6 max-w-3xl mx-auto pb-12">
      <div className="border-t border-[#1f1f1f] pt-8 flex justify-between items-center">
        <span className="text-xs text-[#333]">Paul Choi</span>
        <span className="text-xs text-[#333]">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
