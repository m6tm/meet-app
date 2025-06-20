
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserPlus, Search, ChevronUp, ChevronDown, MoreHorizontal, MoreVertical } from 'lucide-react';
import type { Participant } from './types';
import { cn } from "@/lib/utils";

interface ParticipantsContentProps {
  currentParticipantsCount: number;
  displayName: string;
  remoteParticipants: Participant[];
}

const ParticipantsContent: React.FC<ParticipantsContentProps> = ({
  currentParticipantsCount,
  displayName,
  remoteParticipants
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isParticipantsListExpanded, setIsParticipantsListExpanded] = useState(true);

  const allDisplayParticipants = [
    { id: 'user-local', name: `${displayName || "Vous"} (Vous)`, avatarFallback: displayName ? displayName.charAt(0).toUpperCase() : 'U', isLocal: true },
    ...remoteParticipants.map(p => ({...p, isLocal: false}))
  ];

  const filteredParticipants = allDisplayParticipants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleParticipantsList = () => {
    setIsParticipantsListExpanded(prev => !prev);
  };

  return (
    <>
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-shrink-0">
        <Button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 h-9 sm:h-10 text-xs sm:text-sm">
            <UserPlus className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5"/> Ajouter
        </Button>
        <div className="relative">
            <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher des contacts"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 pl-8 sm:pl-10 h-9 sm:h-10 text-xs sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>
      <div className="flex-grow p-3 sm:p-4 space-y-1.5 sm:space-y-2 overflow-y-auto text-sm text-white custom-scrollbar-chat">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Contributeurs ({filteredParticipants.length})</p>
          <Button variant="ghost" size="icon" onClick={toggleParticipantsList} className="text-gray-400 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
            {isParticipantsListExpanded ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>
        {isParticipantsListExpanded && (
          <>
            {filteredParticipants.map((participant) => (
                <div key={participant.id} className="flex items-center justify-between p-1.5 sm:p-2 hover:bg-gray-700/80 rounded-md cursor-pointer">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <Avatar className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                            <AvatarFallback className={cn("text-xs sm:text-sm", participant.isLocal ? "bg-green-600 text-white" : "bg-primary text-primary-foreground")}>{participant.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <span className="truncate text-xs sm:text-sm">{participant.name}</span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                        <Button variant="ghost" size="icon" className="text-white bg-purple-600 hover:bg-purple-700 p-1 rounded-full h-6 w-6 sm:h-7 sm:w-7">
                            <MoreHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                            <MoreVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Button>
                    </div>
                </div>
            ))}
            {filteredParticipants.length === 0 && searchTerm && (
              <p className="text-center text-gray-400 text-xs py-3 sm:py-4">Aucun participant trouvé pour "{searchTerm}".</p>
            )}
             {filteredParticipants.length === 0 && !searchTerm && (
              <p className="text-center text-gray-400 text-xs py-3 sm:py-4">Aucun participant dans l'appel.</p>
            )}
          </>
        )}
        {!isParticipantsListExpanded && (
           <p className="text-center text-gray-400 text-xs py-3 sm:py-4">Liste des participants masquée.</p>
        )}
      </div>
    </>
  );
};

export default ParticipantsContent;
