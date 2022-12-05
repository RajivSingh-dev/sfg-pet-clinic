package guru.springframework.sfgpetclinic.services.springdatajpa;

import guru.springframework.sfgpetclinic.model.Owner;
import guru.springframework.sfgpetclinic.model.Pet;
import guru.springframework.sfgpetclinic.repositories.OwnerRepository;
import guru.springframework.sfgpetclinic.repositories.PetReopistory;
import guru.springframework.sfgpetclinic.services.PetService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@Profile("springdatajpa")
public class PetSDJpaService implements PetService {

    private final OwnerRepository ownerRepository;

    public PetSDJpaService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }


    @Override
    public Pet findByPetIdAndOwnerId(Long petId,Long ownerId) {
        Optional<Owner> ownerOptional = ownerRepository.findById(ownerId);

        Owner owner = ownerOptional.get();

        Optional<Pet> petOptional = owner.getPets().stream().filter(pet -> pet.getId().equals(petId)).findFirst();

        if(!petOptional.isPresent())
        {
            System.out.println("ingredient id not present");
        }

        return petOptional.get();
    }

    @Override
    public Pet updateByPetIdAndOwnerId(Long ownerId,Pet pet) {
        Optional<Owner> ownerOptional = ownerRepository.findById(ownerId);

            if(!ownerOptional.isPresent())
            {
              return new Pet();
            }
            else
          {
            Owner owner = ownerOptional.get();
            Optional<Pet> petOptional = owner.getPets().stream().filter(pet1 -> pet1.getId().equals(pet.getId())).findFirst();
         if(petOptional.isPresent()) {

             Pet pet1 = petOptional.get();
             pet1.setName(pet.getName());
             pet1.setBirthDate(pet.getBirthDate());
             pet1.setPetType(pet.getPetType());


         }
         else{
             pet.setOwner(owner);
             owner.addPet(pet);

         }
              Owner savedPet = ownerRepository.save(owner);

              Optional<Pet> savedPetOptional = savedPet.getPets().stream().filter(pet1 -> pet1.getId().equals(pet.getId())).findFirst();



              return savedPetOptional.get();
        }




    }

}
