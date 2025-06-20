
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Mic, MicOff, Video, VideoOff, ScreenShare, PhoneOff, Users, MessageSquare,
  Hand, Info, Clock, MoreVertical as MoreVerticalIcon
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface ControlsBarProps {
  isMuted: boolean;
  isVideoOff: boolean;
  isHandRaised: boolean;
  handleToggleMute: () => void;
  handleToggleVideo: () => void;
  handleShareScreen: () => void;
  handleRaiseHand: () => void;
  handleEndCall: () => void;
  toggleSidePanel: (panel: 'info' | 'participants' | 'chat') => void;
  currentTimeState: string;
  meetingCode: string;
  activeSidePanel: 'info' | 'participants' | 'chat' | null;
  currentParticipantsCount: number;
}

const ControlsBar: React.FC<ControlsBarProps> = ({
  isMuted,
  isVideoOff,
  isHandRaised,
  handleToggleMute,
  handleToggleVideo,
  handleShareScreen,
  handleRaiseHand,
  handleEndCall,
  toggleSidePanel,
  currentTimeState,
  meetingCode,
  activeSidePanel,
  currentParticipantsCount,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-md p-2 sm:p-3 z-20">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Left Controls: Time & Meeting Code - Hidden on small screens */}
        <div className="hidden md:flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-300">
          <span className="flex items-center"><Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> {currentTimeState}</span>
          <span className="hidden sm:inline-block">{meetingCode}</span>
        </div>

        {/* Center Controls */}
        <div className="flex flex-grow md:flex-grow-0 items-center justify-center space-x-1 sm:space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleMute} 
            className={cn(
              "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10", 
              isMuted && "bg-red-600 hover:bg-red-700"
            )}
            aria-label={isMuted ? "Activer le microphone" : "Couper le microphone"}
          >
            {isMuted ? <MicOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Mic className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleVideo} 
            className={cn(
              "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10", 
              isVideoOff && "bg-red-600 hover:bg-red-700"
            )}
            aria-label={isVideoOff ? "Activer la caméra" : "Désactiver la caméra"}
          >
            {isVideoOff ? <VideoOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Video className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleShareScreen} 
            className="text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10 hidden sm:flex"
            aria-label="Partager l'écran"
          >
            <ScreenShare className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleRaiseHand} 
            className={cn(
              "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10",
              isHandRaised && "bg-blue-600 hover:bg-blue-700"
            )}
            aria-label={isHandRaised ? "Baisser la main" : "Lever la main"}
          >
            <Hand className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleEndCall} 
            className="rounded-full h-9 w-auto px-3 sm:h-10 sm:px-4 bg-red-600 hover:bg-red-700 text-white"
            aria-label="Terminer l'appel"
          >
            <PhoneOff className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="ml-1.5 hidden sm:inline">Quitter</span>
          </Button>
        </div>

        {/* Right Controls - Panel Toggles */}
        {/* On small screens, these are in a "More" dropdown */}
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10">
                        <MoreVerticalIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
                    <DropdownMenuItem onClick={() => toggleSidePanel('info')} className="focus:bg-gray-700">
                        <Info className="mr-2 h-4 w-4" /> Infos
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toggleSidePanel('participants')} className="focus:bg-gray-700">
                        <Users className="mr-2 h-4 w-4" /> Participants 
                        <Badge variant="default" className="ml-auto bg-blue-500 text-white text-[10px] h-4 w-4 min-w-4 rounded-full flex items-center justify-center p-0">
                            {currentParticipantsCount}
                        </Badge>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toggleSidePanel('chat')} className="focus:bg-gray-700">
                        <MessageSquare className="mr-2 h-4 w-4" /> Chat
                    </DropdownMenuItem>
                     <DropdownMenuItem onClick={handleShareScreen} className="focus:bg-gray-700 sm:hidden">
                        <ScreenShare className="mr-2 h-4 w-4" /> Partager l'écran
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
           <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => toggleSidePanel('info')} 
            className={cn(
                "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10", 
                activeSidePanel === 'info' && "bg-gray-700"
            )}
            aria-label="Afficher les informations de la réunion"
           >
            <Info className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => toggleSidePanel('participants')} 
            className={cn(
                "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full relative h-9 w-9 sm:h-10 sm:w-10", 
                activeSidePanel === 'participants' && "bg-gray-700"
            )}
            aria-label="Afficher les participants"
          >
            <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            <Badge variant="default" className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white text-[9px] sm:text-[10px] h-3.5 w-3.5 sm:h-4 sm:w-4 min-w-[0.875rem] sm:min-w-4 rounded-full flex items-center justify-center p-0">
                {currentParticipantsCount}
            </Badge>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => toggleSidePanel('chat')} 
            className={cn(
                "text-white hover:bg-gray-700/70 p-2 sm:p-2.5 rounded-full h-9 w-9 sm:h-10 sm:w-10", 
                activeSidePanel === 'chat' && "bg-gray-700"
            )}
            aria-label="Afficher le chat"
          >
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlsBar;
