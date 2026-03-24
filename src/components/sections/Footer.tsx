import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#161210] border-t border-[#2E2820]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Tømrar Åge Vik"
              width={100}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-70"
            />
            <div className="h-4 w-px bg-[#2E2820]" />
            <p className="text-xs text-[#6B5E4E] font-body">
              Bergen · Sidan 2003
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="tel:92816022" className="text-xs text-[#9B8E7E] hover:text-[#C97C2A] transition-colors font-body">
              928 16 022
            </a>
            <a href="mailto:agevik@tomrar.no" className="text-xs text-[#9B8E7E] hover:text-[#C97C2A] transition-colors font-body">
              agevik@tomrar.no
            </a>
            <span className="text-xs text-[#6B5E4E] font-body">
              Storeboten 40, Bergen
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2E2820] flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-[10px] text-[#6B5E4E] font-body">
            © {year} Åge Vik Tømrar · Bergen
          </p>
          <p className="text-[10px] text-[#6B5E4E] font-body">
            Org.nr. 987 654 321 MVA
          </p>
        </div>
      </div>
    </footer>
  )
}
