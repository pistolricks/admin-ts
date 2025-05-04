import { QrCode } from '@ark-ui/solid/qr-code'
import { Component } from 'solid-js'

export const QRCodeWithOverlay: Component<{
    value: string
    src: string
}> = props => {
    return (
        <QrCode.Root defaultValue={props.value}>
            <QrCode.Frame>
                <QrCode.Pattern />
            </QrCode.Frame>
            <QrCode.Overlay>
                <img src={props.src} alt={props.value} />
            </QrCode.Overlay>
        </QrCode.Root>
    )
}
