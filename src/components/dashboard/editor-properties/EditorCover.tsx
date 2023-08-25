import { FieldLabel } from "~/components/ui/FieldLabel"
import { ImageUploader } from "~/components/ui/ImageUploader"
import { Values, useEditorState } from "~/hooks/useEditorState"
import { useTranslation } from "~/lib/i18n/client"

export default function EditorCover({
  updateValue,
  prompt,
}: {
  updateValue: (val: Partial<Values>) => void
  prompt?: string
}) {
  const { t } = useTranslation("dashboard")
  const value = useEditorState((state) => state.cover)

  return (
    <div>
      <FieldLabel label={t("Cover Image")} />
      <ImageUploader
        className="aspect-video rounded-lg"
        value={value}
        hasClose={true}
        withMimeType={true}
        uploadEnd={(key) => {
          updateValue({
            cover: key,
          })
        }}
        accept="image/*"
      />
      {prompt && <div className="text-xs text-gray-400 mt-1">{prompt}</div>}
    </div>
  )
}