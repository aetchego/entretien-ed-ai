import Block from "../../../../components/ui/Block";

type CommentProps = {
  comment: string;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <Block title="Commentaire" color="bg-gray-50">
      <div className="space-y-5">
        <div className="w-full">
          <p className="text-xs text-left">{comment}</p>
        </div>
        <audio controls className="w-full h-[30px]">
          <source src="path-to-your-audio-file.mp3" type="audio/mpeg" />
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
      </div>
    </Block>
  );
};

export default Comment;
