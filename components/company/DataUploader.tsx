'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils'
import { CheckCircleIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'

const DATA_TYPES = [
  { value: 'photograph', label: 'Fotografie' },
  { value: 'ledger', label: 'Geschäftsbuch' },
  { value: 'blueprint', label: 'Bauplan' },
  { value: 'document', label: 'Dokument' },
  { value: 'other', label: 'Andere' },
]

interface DataUploaderProps {
  onUploadComplete?: () => void
}

export function DataUploader({ onUploadComplete }: DataUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [file, setFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dataType: '',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
      setSuccess(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setError(null)
      setSuccess(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError('Bitte wählen Sie eine Datei')
      return
    }

    if (!formData.title) {
      setError('Titel erforderlich')
      return
    }

    if (!formData.dataType) {
      setError('Datentyp erforderlich')
      return
    }

    setIsUploading(true)
    setError(null)

    try {
      const data = new FormData()
      data.append('file', file)
      data.append('title', formData.title)
      data.append('description', formData.description)
      data.append('dataType', formData.dataType)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || 'Upload fehlgeschlagen')
      }

      setSuccess(true)
      setFile(null)
      setFormData({ title: '', description: '', dataType: '' })
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      onUploadComplete?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-sihl-red/10 border border-sihl-red rounded-lg">
          <p className="text-sm text-sihl-red font-mono">{error}</p>
        </div>
      )}

      {success && (
        <div className="p-4 bg-fund-green/10 border border-fund-green rounded-lg">
          <p className="text-sm text-fund-green font-mono">
            Datei erfolgreich hochgeladen!
          </p>
        </div>
      )}

      {/* File drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
          file
            ? 'border-fund-green bg-fund-green/5'
            : 'border-historic-sepia/30 hover:border-sihl-red hover:bg-sihl-red/5'
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/tiff,image/webp,application/pdf"
          className="hidden"
        />

        {file ? (
          <div className="space-y-2">
            <CheckCircleIcon className="w-12 h-12 mx-auto text-fund-green" aria-hidden="true" />
            <p className="font-mono text-brand-black">{file.name}</p>
            <p className="text-sm font-mono text-historic-sepia">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <ArrowUpTrayIcon className="w-12 h-12 mx-auto text-historic-sepia" aria-hidden="true" />
            <p className="font-mono text-brand-black">
              Datei hier ablegen oder klicken zum Auswählen
            </p>
            <p className="text-sm font-mono text-historic-sepia">
              JPEG, PNG, TIFF, WebP oder PDF (max. 50MB)
            </p>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div>
        <label htmlFor="title" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Titel *
        </label>
        <Input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="z.B. Lohnbuch der Spinnerei 1892"
        />
      </div>

      <div>
        <label htmlFor="dataType" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Datentyp *
        </label>
        <select
          id="dataType"
          value={formData.dataType}
          onChange={(e) => setFormData({ ...formData, dataType: e.target.value })}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent"
        >
          <option value="">Bitte wählen...</option>
          {DATA_TYPES.map((type) => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Beschreibung <span className="text-historic-sepia">(optional)</span>
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Zusätzliche Informationen zum Dokument..."
          rows={3}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black placeholder:text-historic-sepia/50 focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isUploading || !file}>
        {isUploading ? 'Wird hochgeladen...' : 'Hochladen'}
      </Button>
    </form>
  )
}
