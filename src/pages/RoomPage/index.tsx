import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function RoomPage() {
    const { roomId } = useParams();

    const myMeeting = async (element: HTMLDivElement) => {
        const appId = 1640729303;
        const secrete = "2847a91943ed8b42f3a82d02acac2975";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            secrete,
            roomId as string,
            Date.now().toString(),
            "Karakat"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Personal link",
                    url: `http://localhost:5173/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showTurnOffRemoteCameraButton: true,
            showTurnOffRemoteMicrophoneButton: true,
            showRemoveUserButton: true,
        });
    };

    return (
        <div
            ref={myMeeting}
            style={{
                backgroundColor: 'white',
                height: '100vh', 
                fontFamily:"'Aoboshi One', sans-serif",
            }}
        />
    );
}

export default RoomPage;
