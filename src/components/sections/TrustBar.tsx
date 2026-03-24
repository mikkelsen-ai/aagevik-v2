export function TrustBar() {
  const signals = [
    { value: '100%',    label: 'Anbefalt av alle kunder' },
    { value: '20+',     label: 'År i bransjen' },
    { value: 'Mester',  label: 'Mesterbrev i tømrerfaget' },
    { value: 'Gratis',  label: 'Befaring uten forpliktelse' },
  ]

  return (
    <div className="border-y border-[#D5C9B4] bg-[#E6DFC8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap sm:flex-nowrap divide-x divide-[#D5C9B4]">
          {signals.map((s) => (
            <div key={s.value} className="flex-1 min-w-[50%] sm:min-w-0 px-5 py-5 sm:py-6 text-center">
              <p className="font-display font-bold text-xl sm:text-2xl text-[#161210] tracking-tight">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs text-[#6B5E4E] font-body">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
