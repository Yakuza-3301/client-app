interface LoadingOverlayProps {
  message: string
}

export const LoadingOverlay = ({ message }: LoadingOverlayProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-slate-800 p-6 rounded-xl text-white">
      <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mb-4" />
      <p>{message}</p>
    </div>
  </div>
)