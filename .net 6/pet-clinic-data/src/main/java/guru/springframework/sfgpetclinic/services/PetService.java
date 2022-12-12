package guru.springframework.sfgpetclinic.services;

import guru.springframework.sfgpetclinic.model.Pet;

import java.util.Set;

public interface PetService {

 Pet findByPetIdAndOwnerId(Long ownerId,Long petId);
 Pet updateByPetIdAndOwnerId(Long ownerId,Pet pet);


}

