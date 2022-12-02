package guru.springframework.sfgpetclinic.controllers;

import guru.springframework.sfgpetclinic.model.Pet;
import guru.springframework.sfgpetclinic.services.PetService;
import org.springframework.web.bind.annotation.*;

@RestController
public class PetApiController {

    PetService petService;

    public PetApiController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping({"/petData"})
    public Pet petById(@RequestParam  Long ownerId,@RequestParam Long petId)
    {
      return petService.findByPetIdAndOwnerId(petId,ownerId);
    }
    @PostMapping({"/submitPetData"})
    public Pet updatePetById(@RequestParam  Long ownerId, @RequestBody Pet pet)
    {
      return petService.updateByPetIdAndOwnerId(ownerId,pet);
    }


}
