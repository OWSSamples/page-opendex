import LocalizedPageHeader from "@/components/LocalizedPageHeader";

export const metadata = { title: "Privacidad" };

export default function Privacidad() {
  return (
    <>
      <LocalizedPageHeader pageKey="privacy" />
      <section id="cookies" className="bg-white">
        <div className="mx-auto max-w-[840px] px-5 py-20 md:px-8">
          <div className="border border-[#e7e4dc] bg-[#faf8f4] p-7">
            <h2 className="text-[22px] font-semibold text-[#1d1d1b]">Uso de cookies</h2>
            <p className="mt-3 text-[14px] leading-6 text-[#4a4a47]">
              Esta pagina reserva el apartado para politicas de cookies, privacidad y tratamiento de datos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
