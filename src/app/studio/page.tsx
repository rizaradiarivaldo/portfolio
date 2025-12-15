export default function StudioPage() {
  return (
    <div className="space-y-4 text-neutral-200">
      <p className="text-lg font-semibold text-white">Ini halaman Studio dengan layout khusus.</p>
      <p>Layout ini punya header dan container sendiri yang membungkus konten apa pun di dalam folder `studio`.</p>
      <p>Semua sub-route di dalam folder ini otomatis pakai layout yang sama.</p>
    </div>
  )
}
